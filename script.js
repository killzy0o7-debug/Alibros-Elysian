function payWithUPI(productName, amount) {
    const upiID = 'yourupi@bank'; // replace with your UPI ID
    const name = 'AliBros Elysian Drapes';
    const currency = 'INR';
    const url = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(productName)}&am=${amount}&cu=${currency}`;
    window.location.href = url;
}
