const router = require('express').Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');

router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.key_id,
            key_secret: process.env.key_secret
        });
        
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(8).toString('hex'),
            payment_capture: 0
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Something went wrong." });
            }
            res.status(200).json({ data: order });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong." });
    }
});

router.post("/verify", async (req, res) => {
    try {
        const {
            Razorpay_order_id,
            Razorpay_payment_id,
            Razorpay_signature
        } = req.body;

        const sign = Razorpay_order_id+""+Razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.key_secret)
                                         .update(sign.toString())
                                         .digest('hex');

        if (expectedSignature === Razorpay_signature) {
            res.status(200).json({ message: "Payment verification successful." });
        } else {
            res.status(400).json({ error: "Payment verification failed." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;


