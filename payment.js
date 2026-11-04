// Habtamu's Academic Hub - Direct Payment Module
(function() {
    const paymentBoxHTML = `
    <div id="directPaymentSection" style="background:#ffffff; border:2px solid #00A896; border-radius:12px; padding:16px; margin:16px 0; font-family:sans-serif; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
        <h4 style="color:#0D233A; margin-top:0; margin-bottom:8px; font-size:16px;">🔓 Unlock Batch (3 ETB)</h4>
        <p style="color:#666; font-size:13px; margin-bottom:12px;">Transfer 3 ETB using your preferred account below:</p>

        <!-- Telebirr Account Box -->
        <div style="background:#f4fbfb; border-left:4px solid #00A896; padding:10px; border-radius:6px; margin-bottom:8px;">
            <div style="font-weight:bold; color:#0D233A; font-size:13px;">📱 Telebirr</div>
            <div style="font-size:13px; color:#333; margin-top:2px;">
                Number: <strong>0935807777</strong><br>
                Name: <strong>Habtamu Abuye</strong>
            </div>
        </div>

        <!-- CBE Account Box -->
        <div style="background:#f0f4f8; border-left:4px solid #0D233A; padding:10px; border-radius:6px; margin-bottom:12px;">
            <div style="font-weight:bold; color:#0D233A; font-size:13px;">🏦 Commercial Bank of Ethiopia (CBE)</div>
            <div style="font-size:13px; color:#333; margin-top:2px;">
                Account: <strong>1000694144784</strong><br>
                Name: <strong>Habtamu Abuye</strong>
            </div>
        </div>

        <!-- Verification Input -->
        <div style="margin-bottom:10px;">
            <label style="font-size:11px; font-weight:bold; color:#333; display:block; margin-bottom:4px;">Enter Transaction Ref / Phone Number:</label>
            <input type="text" id="userTxRef" placeholder="e.g. TXN12345 or 0911..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:6px; font-size:13px; box-sizing:border-box;">
        </div>

        <button onclick="verifyBatchPayment()" style="width:100%; background:#00A896; color:white; border:none; padding:10px; border-radius:6px; font-weight:bold; font-size:13px; cursor:pointer;">Verify & Submit Payment</button>
    </div>`;

    // Automatically inject this payment section wherever a placeholder exists, or at the bottom of the page container
    window.addEventListener('DOMContentLoaded', () => {
        const target = document.getElementById('payment-container') || document.body;
        const div = document.createElement('div');
        div.innerHTML = paymentBoxHTML;
        target.appendChild(div);
    });
})();

function verifyBatchPayment() {
    const ref = document.getElementById('userTxRef').value;
    if(!ref) {
        alert('Please enter your transaction reference or phone number.');
        return;
    }
    alert('Thank you! Your transaction reference has been submitted for verification.');
    document.getElementById('userTxRef').value = '';
}
