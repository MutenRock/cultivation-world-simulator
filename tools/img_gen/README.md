# Image generation helper

`gen_img.py` reads the DashScope credential from the process environment. Never store a real key in this repository.

PowerShell example:

```powershell
$env:DASHSCOPE_API_KEY = "<set-locally>"
python tools/img_gen/gen_img.py
```

The environment variable only applies to the current PowerShell session. Use `.env.example` as a variable-name reference; do not add a populated `.env` file to Git.
