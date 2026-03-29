const Update = require('../models/update');

exports.postUpdate = async (req, res) => {
    try {
        const { content } = req.body;
        if (!content)
            return res.status(400).json({ message: 'Content is required' });

        const update = await Update.create({ userId: req.user.id, content });
        res.status(201).json(update);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getFeed = async (req, res) => {
    try {
        const updates = await Update.find()
            .populate('userId', 'name')
            .sort({ createdAt: -1 });
        res.status(200).json(updates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUserUpdates = async (req, res) => {
    try {
        const updates = await Update.find({ userId: req.params.id })
            .sort({ createdAt: -1 });
        res.status(200).json(updates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getStats = async (req, res) => {
    try {
        const updates = await Update.find({ userId: req.params.id })
            .sort({ createdAt: 1 });

        if (updates.length === 0)
            return res.status(200).json({ totalUpdates: 0, lastActive: null, streak: 0 });

        const totalUpdates = updates.length;
        const lastActive = updates[updates.length - 1].createdAt.toISOString().split('T')[0];
        // Streak logic
        let streak = 1;
        for (let i = updates.length - 1; i > 0; i--) {
            const curr = new Date(updates[i].createdAt).setHours(0,0,0,0);
            const prev = new Date(updates[i-1].createdAt).setHours(0,0,0,0);
            const diffDays = (curr - prev) / (1000 * 60 * 60 * 24);

            if (diffDays === 1) streak++;
            else break;
        }
        res.status(200).json({ totalUpdates, lastActive, streak });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};