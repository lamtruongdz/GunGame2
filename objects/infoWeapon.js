function InfoWeapon(x, y, w, h) {
	this.pos = v(x || width - 60, y || height - 290);
	this.size = v(w || 100, h || 50);

	this.show = function() {
		noStroke();

		fill(120, 50);
		rect(this.pos.x, this.pos.y - this.size.y * 0.25, this.size.x, this.size.y * 0.5);
		fill(0, 50);
		rect(this.pos.x, this.pos.y + this.size.y * 0.25, this.size.x, this.size.y * 0.5);

		noStroke();
		fill(255);
		textAlign(CENTER);
		if(!viewport.target.shield){
			text(viewport.target.weapon.name, this.pos.x, this.pos.y - this.size.y * 0.15);
			if (viewport.target.weapon.gun.reloading) {
				fill(255, 150, 20);
				text("..Reloading..", this.pos.x, this.pos.y + this.size.y / 3);
			} else text(viewport.target.weapon.gun.bullsLeft, this.pos.x, this.pos.y + this.size.y * 0.3);
		
		} else {
			if(mouseIsPressed) fill(255, 0, 0);
			text('Shield On', this.pos.x, this.pos.y - this.size.y * 0.15);
			// text("", this.pos.x, this.pos.y + this.size.y / 3);
		}

		// show more info
		if(mouseX > this.pos.x - this.size.x / 2 && mouseX < this.pos.x + this.size.x / 2
		&& mouseY > this.pos.y - this.size.y / 2 && mouseY < this.pos.y + this.size.y / 2){
			textAlign(RIGHT);
			text('press F to get "' + (viewport.target.shield?'gun':'shield') + '"', mouseX, mouseY);
		}
	}
}