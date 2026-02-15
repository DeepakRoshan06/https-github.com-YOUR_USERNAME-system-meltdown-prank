function toggleForm() {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    if (signinForm.classList.contains('hidden')) {
        signinForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        document.title = "Welcome - Sign In";
    } else {
        signinForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        document.title = "Create Account";
    }
}

function handleLogin(event) {
    event.preventDefault();

    // 1. Lock the form
    const btn = event.target.querySelector('button');
    btn.innerText = "Connecting...";
    btn.disabled = true;

    // 2. Wait briefly then trigger terminal
    setTimeout(() => {
        document.getElementById('main-container').classList.add('hidden');
        document.getElementById('terminal-overlay').classList.remove('hidden');
        startTerminalSequence();
    }, 1000);
}

function startTerminalSequence() {
    const logs = [
        "Connecting to server...",
        "Authenticating...",
        "[SUCCESS] Connection established.",
        "Downloading user data...",
        "[WARNING] Unauthorized access detected!",
        "[SYSTEM] Initiating security protocol...",
        "Tracing IP address...",
        "IP Found: 192.168.1.X",
        "[ERROR] CRITICAL SYSTEM FAILURE",
        "Deleting System32...",
        "Formatting Drive C: [|||||..........] 25%",
        "Formatting Drive C: [||||||||||.....] 65%",
        "Formatting Drive C: [|||||||||||||||] 100%",
        "[SYSTEM] MELTDOWN IMMINENT",
        "Good bye, user."
    ];

    const terminalContent = document.getElementById('terminal-content');
    let delay = 0;

    logs.forEach((log, index) => {
        // Variable speed for realism
        const speed = Math.random() * 800 + 400;
        delay += speed;

        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'log-line';

            if (log.includes("[ERROR]") || log.includes("Deleting")) {
                p.classList.add('log-error');
                // Shake the screen on errors
                document.body.classList.add('shake');
                setTimeout(() => document.body.classList.remove('shake'), 500);
            } else if (log.includes("[WARNING]")) {
                p.classList.add('log-warn');
            }

            p.innerText = `> ${log}`;
            terminalContent.appendChild(p);
            terminalContent.scrollTop = terminalContent.scrollHeight;

            // Final Reveal
            if (index === logs.length - 1) {
                setTimeout(revealPrank, 2000);
            }
        }, delay);
    });
}

function revealPrank() {
    document.getElementById('terminal-overlay').remove();
    document.body.style.backgroundColor = '#000';
    document.getElementById('prank-message').classList.remove('hidden');
}
