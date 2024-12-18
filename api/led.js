// api/led.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Get the action (on or off) from the request body
        const { action } = req.body;

        // Validate the action
        if (action !== 'on' && action !== 'off') {
            return res.status(400).json({ status: 'Invalid action' });
        }

        // Here you can interact with the ESP8266 or your backend
        // For now, we'll just simulate the action
        if (action === 'on') {
            console.log("LED is ON");
        } else if (action === 'off') {
            console.log("LED is OFF");
        }

        // Send the response back to the client
        return res.status(200).json({ status: `LED turned ${action}` });
    } else {
        // Handle other HTTP methods
        return res.status(405).json({ status: 'Method Not Allowed' });
    }
}
