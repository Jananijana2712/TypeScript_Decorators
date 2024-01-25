function WithFuel<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      fuel: number = 50;
      isEmpty(): boolean {
        return this.fuel === 0;
      };
    };
  }
  
  class Rocket {
    fuel: number = 75;
  }
  
  const FuelRocket = WithFuel(Rocket);
  const rocket = new FuelRocket();
  console.log((rocket as any).fuel);