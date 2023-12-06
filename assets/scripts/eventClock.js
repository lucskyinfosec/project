cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        totalDuration: 30,  // Thời gian tổng cộng là 30 giây
    },

    onLoad() {
        // Set the initial color to green
        this.sprite.node.color = cc.Color.GREEN;

        // Set the fill type to filled
        this.sprite.type = cc.Sprite.Type.FILLED;
        this.sprite.fillType = cc.Sprite.FillType.RADIAL;

        // Set the fill center to (0.5, 0.5)
        this.sprite.fillCenter = cc.v2(0.5, 0.5);

        // Set the fill start to 0.25
        this.sprite.fillStart = 0.25;

        // Schedule the update function to run every frame
        this.schedule(this.updateSpriteColor, 1);  // Update every second
    },

    updateSpriteColor() {
        this.totalDuration--;

        // Calculate the percentage of time elapsed
        const percentageElapsed = (this.totalDuration) / 30;

        // Update fill range based on the percentage
        this.sprite.fillRange = percentageElapsed;

        // Update the color based on the percentage
        if (percentageElapsed > 0.4) {
            // Green color for the first 60%
            this.sprite.node.color = cc.Color.GREEN;
        } else if (percentageElapsed > 0.1) {
            // Yellow color for the next 30%
            this.sprite.node.color = cc.Color.YELLOW;
        } else {
            // Red color for the last 10%
            this.sprite.node.color = cc.Color.RED;
        }
        if (percentageElapsed<=0){
            cc.director.loadScene('resultForm', function () {
                cc.log('Scene switched successfully');
            });
        }


        // Check if the timer has reached zero
        if (this.totalDuration <= 0) {
            // Timer has expired, you may want to perform some action here
            this.unschedule(this.updateSpriteColor);  // Stop the timer
        }
    },
});
