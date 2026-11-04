// Habtamu's Academic Hub - Strict 3-Trial & Direct Payment Module
(function() {
    // Check or initialize trial count in browser storage
    let trials = parseInt(localStorage.getItem('habte_trials') || '0');
    const maxTrials = 3;

    // Inject payment & lock styles
    const style = document.createElement('style');
    style.innerHTML = `
        .locked-overlay {
            background: rgba(13, 35, 58, 0.95);
            color: white;
            padding: 24px;
            border-radius: 12px;
            text-align: center;
            font-family: sans-serif;
            margin: 20px 0;
            border: 2px solid #00A896;
        }
        .pay-box {
            background: #ffffff;
            color: #1e293b;
            text-align: left;
            padding: 16px;
            border-radius: 8px;
            margin-top: 16px;
        }
    `;
    document.head.appendChild(style);

    // Global function for student answering/clicking
    window.checkTrialLimit = function(callbackFunction) {
        trials = parseInt(localStorage.getItem('habte_trials') || '0');
        
        if (trials < maxTrials) {
            trials++;
            localStorage.setItem('habte_trials', trials);
            console.log(`Trial ${trials} of ${maxTrials}`);
            if (typeof callbackFunction === 'function') callbackFunction();
        } else {
            triggerPaymentLock();
        }
    };

    function triggerPaymentLock() {
        // Find main content container or body and replace with payment wall
        const container = document.querySelector('.container') || document.body;
        container.innerHTML = `
            <div class="locked-overlay">
                <h3 style="color:#00A896; margin-top:0;">🔒 Free Trial Limit Reached</h3>
                <p style="font-size:13px; color:#cbd5e1;">You have used your ${maxTrials} free practice attempts. To unlock this batch and access all high-yield questions with clinical rationales, please complete the 3 ETB payment below:</p>
                
                <div class="pay-box">
                    <h4 style="color:#0D233A; margin-top:0; margin-bottom:8px;">💳 Choose Payment Method (3 ETB)</h4>
                    
                    <!-- Telebirr Option -->
                    <div style="background:#f4fbfb; border-left:4px solid #00A896; padding:10px; border-radius:6px; margin-bottom:8px;">
                        <div style="font-weight:bold; color:#0D233A; font-size:13px;">📱 Telebirr</div>
                        <div style="font-size:13px; color:#333; margin-top:2px;">
                            Number: <strong>0935807777</strong><br>
                            Name: <strong>Habtamu Abuye</strong>
                        </div>
                    </div>

                    <!-- CBE Option -->
                    <div style="background:#f0f4f8; border-left:4px solid #0D233A; padding:10px; border-radius:6px; margin-bottom:12px;">
                        <div style="font-weight:bold; color:#0D233A; font-size:13px;">🏦 Commercial Bank of Ethiopia (CBE)</div>
                        <div style="font-size:13px; color:#333; margin-top:2px;">
                            Account: <strong>1000694144784</strong><br>
                            Name: <strong>Habtamu Abuye</strong>
                        </div>
                    </div>

                    <!-- Ref Input -->
                    <div style="margin-bottom:10px;">
                        <label style="font-size:11px; font-weight:bold; color:#333; display:block; margin-bottom:4px;">Enter Transaction Ref or Phone Number:</label>
                        <input type="text" id="studentRef" placeholder="e.g. TXN12345 or 0911..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:6px; font-size:13px; box-sizing:border-box;">
                    </div>

                    <button onclick="submitStudentPayment()" style="width:100%; background:#00A896; color:white; border:none; padding:12px; border-radius:6px; font-weight:bold; font-size:14px; cursor:pointer;">Submit Payment & Request Access</button>
                </div>
            </div>
        `;
    }
})();

function submitStudentPayment() {
    const ref = document.getElementById('studentRef').value;
    if(!ref) {
        alert('Please enter your transaction reference or phone number.');
        return;
    }
    alert('Thank you! Reference submitted. Once verified by Habtamu, access will be restored.');
    localStorage.setItem('habte_trials', '0'); // Reset or handle validation logic
    location.reload();
}
