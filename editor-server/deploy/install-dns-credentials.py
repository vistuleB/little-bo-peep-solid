"""Run on the author's computer; send Porkbun keys directly over SSH."""
import getpass
import re
import subprocess
import sys

if len(sys.argv) != 2 or not re.fullmatch(r"[a-zA-Z0-9_.@:-]+", sys.argv[1]) or sys.argv[1].startswith("-"):
    raise SystemExit("Usage: python3 install-dns-credentials.py root@SERVER_IP")

values = []
for label, name in [("Porkbun API key", "PORKBUN_API_KEY"),
                    ("Porkbun secret key", "PORKBUN_API_SECRET_KEY")]:
    value = getpass.getpass(label + " (hidden): ").strip()
    if not re.fullmatch(r"[A-Za-z0-9_-]+", value):
        raise SystemExit("Invalid key format; no credentials were sent.")
    values.append(name + "=" + value)

subprocess.run(
    ["ssh", "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes", sys.argv[1],
     "umask 077; cat > /opt/tsc-editor/secrets/porkbun.env && chmod 600 /opt/tsc-editor/secrets/porkbun.env"],
    input="\n".join(values) + "\n", text=True, check=True,
)
print("Credentials installed on the server. No local credential file was created.")
