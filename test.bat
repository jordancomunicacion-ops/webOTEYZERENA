@echo off
:: Deshabilitar el eco de comandos para una salida limpia

echo ==========================================
echo   Iniciando Servidor OTEYZERENA (Port 3001)
echo ==========================================

:: Arranca el servidor en una nueva ventana de terminal
start "Servidor Next.js" cmd /c "npm run dev"

:: Espera unos segundos para que el servidor tenga tiempo de inicializarse
echo Esperando 5 segundos para que el servidor arranque...
timeout /t 5 /nobreak > nul

:: Abre el navegador predeterminado en el puerto 3001
echo Abriendo el navegador en http://localhost:3001...
start http://localhost:3001

echo.
echo Proceso completado. La web deberia abrirse en breve.
echo Puedes cerrar esta ventana.
pause
exit
