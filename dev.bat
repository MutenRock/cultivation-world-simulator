@echo off
setlocal

REM Go to repo root (folder where this .bat lives)
cd /d "%~dp0"

REM Create venv if missing (Python 3.12)
if not exist ".venv\Scripts\python.exe" (
  echo [dev] Creating venv with Python 3.12...
  py -3.12 -m venv .venv
)

REM Activate venv
call ".venv\Scripts\activate.bat"

REM Install/update backend deps
python -m pip install -U pip setuptools wheel
python -m pip install -r requirements.txt

REM Install/update frontend deps + build (optional but often needed)
pushd web
call npm install
popd

REM Start dev server
python src\server\main.py --dev

endlocal