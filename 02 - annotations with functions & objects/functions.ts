// type annotation for functions
// 1) what type of arguments is received by the function
// 2) what type of value the function will return

// type inference
// 1) what type of value the function will return, no info about arguments

const add = (a: number, b: number): number => {
  return a + b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous functions: functions which do not have name associated with them
const product = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// destructuring date & weather properties
const printWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

printWeather(forecast);
