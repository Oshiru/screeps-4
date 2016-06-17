"use strict";

Structure.prototype.isFull = function() {
    return this.energy >= this.energyCapacity;
};

Structure.prototype.isEmpty = function() {
    return this.energy <= 0;
};

Structure.prototype.needsRepair = function(name) {
    return this.hits < this.hitsMax * 0.98;
};

Structure.prototype.getEnergyPercentage = function(name) {
    console.log(this.store);
        console.log(this.store.energy / this.storeCapacity);
    console.log(this.energy / this.energyCapacity);
    if (this.store)
        return this.store.energy / this.storeCapacity;
    else
        return this.energy / this.energyCapacity;
};
