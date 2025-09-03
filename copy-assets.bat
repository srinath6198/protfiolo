@echo off
echo Copying assets folder to public directory...
xcopy "protfiolo-main\assets\*" "public\assets\" /E /I /Y
echo Assets copied successfully!
pause
