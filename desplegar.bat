@echo off
set SERVER=root@164.92.167.42
set REMOTE_PATH=/root/SOTOdelPRIOR/apps/oteyzerena

echo -----------------------------------------
echo   OTEYZERENA - Despliegue Automatico
echo -----------------------------------------

echo [1/4] Preparando el paquete de despliegue...
tar --exclude=node_modules --exclude=.next --exclude=.git --exclude=.vscode --exclude=*.tar.gz -czf oteyzerena_web.tar.gz .

echo [2/4] Subiendo el paquete al servidor...
scp oteyzerena_web.tar.gz %SERVER%:%REMOTE_PATH%/

echo [3/4] Desplegando en el servidor...
ssh %SERVER% "cd %REMOTE_PATH% && find . -maxdepth 1 ! -name '.env' ! -name 'oteyzerena_web.tar.gz' ! -name '.' -exec rm -rf {} + && tar -xzf oteyzerena_web.tar.gz && rm oteyzerena_web.tar.gz && docker compose up --build -d"

echo [4/4] Limpiando archivos locales...
del oteyzerena_web.tar.gz

echo -----------------------------------------
echo   Despliegue completado con exito!
echo -----------------------------------------
pause
