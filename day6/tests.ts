class Filme {
  readonly id: number;
  title: string;
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

const filme1 = new Filme(123, "Efeito Borboleta");
//filme1.id = 12
filme1.title = "A rede Social";

// /// / /// // / / / / / // / / / / / // /  /
/// Index Signatures

class HotelRooms {
  [RoomsName: string]: string;
}
const hotel1 = new HotelRooms();
hotel1.hotelCalifornia = "ana";
hotel1.hotelChicago = "maria";
////////////////////////////////////////////////////
/// Herança

class Person {
  constructor(public name: string, public age: number) {
    function sayHello() {
      console.log("Hello " + name);
    }
  }
}
