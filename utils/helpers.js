function getPercentListened (timeListened, weeklyGoal) {
    return Math.round((timeListened / weeklyGoal) * 100);
}


module.exports = { getPercentListened }
