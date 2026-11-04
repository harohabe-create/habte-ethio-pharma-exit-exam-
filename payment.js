// Habtamu's Academic Hub - Standalone Payment Module
(function() {
    const modalHTML = `
    <div id="paymentModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(13,35,58,0.8); z-index:1000; justify-content:center; align-items:center; padding:16px; box-sizing:border-box;">
        <div style="background:#ffffff; width:100%; max-width:400px; padding:24px; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.2); box-sizing:border-box; font-family:sans-serif;">
            <h3 style="color:#0D233A; margin-top:0; margin-bottom:4px;" id="modalTitle">Unlock Question Batch</h3>
            <p style="color:#666; font-size:13px; margin-bottom:16px;">Transfer 3 ETB using your preferred local payment method:</p>

            <!-- Telebirr Option -->
            <div style="border:2px solid #00A896; border-radius:8px; padding:12px; margin-bottom:10px; background:#f4fbfb;">
                <div style="font-weight:bold; color:#0D233A; font-size:14px; margin-bottom:4px;">📱 Telebirr Merchant/Account</div>
                <p style="margin:0; font-size:13px; color:#333; line-height:1.4;">Number: <strong>0935807777</strong><br>Name: <strong>Habtamu Abuye</strong></p>
            </div>

            <!-- Bank Account Option (CBE) -->
            <div style="border:2px solid #0D233A; border-radius:8px; padding:12px; margin-bottom:10px; background:#f0f4f8;">
                <div style="font-weight:bold; color:#0D233A; font-size:14px; margin-bottom:4px;">🏦 Commercial Bank of Ethiopia (CBE)</div>
                <p style="margin:0; font-size:13px; color:#333; line-height:1.4;">Account: <strong>1000694144784</strong><br>Name: <strong>Habtamu Abuye</strong></p>
            </div>

            <!-- Verification Form -->
            <div style="margin-top:14px; margin-bottom:16px;">
                <label style="font-size:12px; font-weight:bold; color:#333; display:block; margin-bottom:4px;">Enter Transaction Ref or Phone Number:</label>
                <input type="text" id="txRefInput" placeholder="e.g., TXN123456 or 0911..." style="width:100%; padding:10px; border:1px solid #ccc; border-radius:6px; font-size:14px; box-sizing:border-box;">
            </div>

            <!-- Actions -->
            <div style="display:flex; gap:10px;">
                <button onclick="submitPayment()" style="flex:1; background:#00A896; color:white; border:none; padding:12px; border-radius:6px; font-weight:bold; cursor:pointer;">Verify & Unlock</button>
                <button onclick="closePaymentModal()" style="background:#e2e8f0; color:#333; border:none; padding:12px 16px; border-radius:6px; font-weight:bold; cursor:pointer;">Cancel</button>
            </div>
        </div>
    </div>`;

    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
})();

function openPaymentModal(subjectName) {
    const titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.innerText = 'Unlock: ' + subjectName;
    const modalEl = document.getElementById('paymentModal');
    if (modalEl) modalEl.style.display = 'flex';
}

function closePaymentModal() {
    const modalEl = document.getElementById('paymentModal');
    if (modalEl) modalEl.style.display = 'none';
    const inputEl = document.getElementById('txRefInput');
    if (inputEl) inputEl.value = '';
}

function submitPayment() {
    const ref = document.getElementById('txRefInput').value;
    if(!ref) {
        alert('Please enter your transaction reference or phone number.');
        return;
    }
    alert('Thank you! Payment reference submitted. Once verified, access will be granted.');
    closePaymentModal();
}
