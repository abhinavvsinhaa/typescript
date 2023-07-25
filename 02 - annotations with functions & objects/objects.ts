const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 20,
    long: 15,
  },
  setAge: function (age: number): void {
    this.age = age;
  },
};

// using .
// const age: number = profile.age;

// destructured way
const { age }: { age: number } = profile;

const {
  coords: { lat, long },
}: {
  coords: {
    lat: number;
    long: number;
  };
} = profile;
