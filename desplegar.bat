@echo off
set SERVER=root@164.92.167.42
set REMOTE_PATH=/root/SOTOdelPRIOR/apps/oteyzerena

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
ssh %SERVER% "docker image prune -f || true; docker builder prune -f --filter until=72h || true; df -h $(docker info --format '{{.DockerRootDir}}') || true"

echo [4/5] Desplegando en el servidor...
ssh %SERVER% "cd %REMOTE_PATH% && find . -maxdepth 1 ! -name '.env' ! -name 'oteyzerena_web.tar.gz' ! -name '.' -exec rm -rf {} + && tar -xzf oteyzerena_web.tar.gz && rm oteyzerena_web.tar.gz && docker compose up --build --force-recreate -d"

echo [5/5] Limpiando archivos locales...
del oteyzerena_web.tar.gz

echo -----------------------------------------
echo   Despliegue completado con exito!
echo -----------------------------------------
pause
