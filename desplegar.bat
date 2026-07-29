@echo off
set SERVER=root@164.92.167.42
REM Las webs viven en /root/SOTOdelPRIOR/webs/; en apps/ solo estan las que
REM llevan backend. Este script apuntaba a apps/oteyzerena, que ya no existe
REM desde la reorganizacion del 25/07/2026: el deploy fallaba en el scp.
set REMOTE_PATH=/root/SOTOdelPRIOR/webs/oteyzerena

echo -----------------------------------------
echo   OTEYZERENA - Despliegue Automatico
echo -----------------------------------------

echo [1/5] Preparando el paquete de despliegue...
tar --exclude=node_modules --exclude=.next --exclude=.git --exclude=.vscode --exclude=*.tar.gz -czf oteyzerena_web.tar.gz .

echo [2/5] Subiendo el paquete al servidor...
scp oteyzerena_web.tar.gz %SERVER%:%REMOTE_PATH%/

REM Liberar disco antes del build: el VPS es compartido por varios stacks y la
REM cache de build lo llena ('no space left on device' a mitad del build).
echo [3/5] Liberando disco en el servidor...
ssh %SERVER% "d=$(docker info --format '{{.DockerRootDir}}'); libre=$(df -BG --output=avail $d | tail -1 | tr -dc '0-9'); echo '    espacio libre (GB):' $libre; if [ ${libre:-0} -lt 20 ]; then echo '    por debajo de 20G: purga completa de la cache de build'; docker builder prune -af || true; else docker builder prune -f --filter until=72h || true; fi; docker image prune -f || true; df -h $d || true"

echo [4/5] Desplegando en el servidor...
ssh %SERVER% "cd %REMOTE_PATH% && find . -maxdepth 1 ! -name '.env' ! -name 'oteyzerena_web.tar.gz' ! -name '.' -exec rm -rf {} + && tar -xzf oteyzerena_web.tar.gz && rm oteyzerena_web.tar.gz && docker compose up --build --force-recreate -d"

echo [5/5] Limpiando archivos locales...
del oteyzerena_web.tar.gz

echo -----------------------------------------
echo   Despliegue completado con exito!
echo -----------------------------------------
pause
