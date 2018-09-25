function Bullet(pos, dir, type, owner) {
	this.objType = 'Bullet';
	this.info = type;
	this.pos = pos.copy(); // pos is a vector
	this.vel = dir;
	this.o = owner;
	this.born = mil;

	this.col = this.info.color || [random(255), random(255), random(255)];
	if(this.info.whenfire) this.info.whenfire(this);
}

Bullet.prototype.run = function() {
	this.update();
	if(this.info.working) this.info.working(this);
	if (insideViewport(this)) this.show();
	if ((mil - this.born) / 1000 > this.info.life) {
		this.end();
	}
};

Bullet.prototype.end = function() {
	if (this.info.finished) this.info.finished(this);
	bArr.splice(bArr.indexOf(this), 1);
};

Bullet.prototype.update = function() {
	this.fakepos = realToFake(this.pos.x, this.pos.y);
	this.show();
	this.pos.add(this.vel.copy().mult(60 / (fr + 1)));
	collisionEdge(this, 0.99);
};

Bullet.prototype.show = function(alpha) {
	noStroke();
	fill(this.col[0], this.col[1], this.col[2], alpha || 100);
	ellipse(this.fakepos.x, this.fakepos.y, this.info.radius * 2, this.info.radius * 2);
};
