'use strict';

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// const nav = document.querySelector('.nav');
// const tabs = document.querySelectorAll('.operations__tab');
// const header = document.querySelector('.header');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');

//   if (!clicked) return;

//   tabs.forEach(t => t.classList.remove('operations__tab--active'));

//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));
//   clicked.classList.add('operations__tab--active');

//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });

// // const initialCoords = section1.getBoundingClientRect();
// // window.addEventListener('scroll', function (e) {
// //   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
// //   else nav.classList.remove('sticky');
// // });

// const navHeight = nav.getBoundingClientRect().height;
// const stickyNav = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   treshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);
// const allSections = document.querySelectorAll('.section');
// const revealSection = function (entries, observer) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target);
//   });
// };
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   treshold: 0.15,
// });
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });

// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });
//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   treshold: 0,
//   rootMargin: '200px',
// });

// imgTargets.forEach(img => imgObserver.observe(img));

// const slides = document.querySelectorAll('.slide');
// const slider = document.querySelector('.slider');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// const dotContainer = document.querySelector('.dots');
// const maxSlide = slides.length - 1;
// let curSlide = 0;

// // slider.style.overflow = 'visible';

// const createDots = function () {
//   slides.forEach(function (_, i) {
//     dotContainer.insertAdjacentHTML(
//       'beforeend',
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };
// createDots();
// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };
// const activateDot = function (slide) {
//   document
//     .querySelectorAll('.dots__dot')
//     .forEach(dot => dot.classList.remove('dots__dot--active'));
//   document
//     .querySelector(`.dots__dot[data-slide="${slide}"]`)
//     .classList.add('dots__dot--active');
// };
// activateDot(0);
// goToSlide(0);
// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };
// const nextSlide = function () {
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };
// btnRight.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click', prevSlide);
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'ArrowLeft') prevSlide();
//   if (e.key === 'ArrowRight') nextSlide();
// });

// dotContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot')) {
//     curSlide = Number(e.target.dataset.slide);
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   }
// });
// const mIntoKm = function (m) {
//   return m * 1.6;
// };
// const kmIntoM = function (km) {
//   return km / 1.6;
// };

// const distanceConverter = function (num, distance) {
//   if (distance === 'm') {
//     return mIntoKm(num);
//   } else if (distance === 'km') {
//     return kmIntoM(num);
//   } else {
//     console.log('nepoznata distanca');
//   }
// };
// console.log(distanceConverter(100, 'km'));
// console.log(distanceConverter(30, 'm'));
// console.log(distanceConverter(12312, 'mr'));

// const calculateTicketPrice = function (userYears) {
//   const price = userYears <= 15 ? 50 : 70;
//   return `cena karte je ${price}$ za korisnika koji ima ${userYears} godina`;
// };
// console.log(calculateTicketPrice(20));
// console.log(calculateTicketPrice(15));
// console.log(calculateTicketPrice(5));
// console.log(calculateTicketPrice(55));

// const isEmptyString = function (string) {
//   return string.length === 0 ? true : false;
// };
// console.log(isEmptyString(''));
// console.log(isEmptyString('ewewew'));
// console.log(isEmptyString('e'));
// console.log(isEmptyString(''));

// const isEven = function (num) {
//   return num % 2 === 0 ? 'paran' : 'neparan';
// };
// console.log(isEven(2));
// console.log(isEven(5));
// console.log(isEven(23324));
// console.log(isEven(25779));
// console.log(isEven(223125));

// let firstName = 'marko';
// let lastName = 'markovic';
// let age = 32;
// let salary = 3000;
// let yearWhenEmployed = 2024;
// let lastYearOfSalary = 2020;
// let country = 'Srbija';
// let street = 'Petra petrovica 25';
// let phone = '069123456';

// const getinfo = function () {
//   return `${firstName} ${lastName} ima ${age} godina
//     i ima platu $${salary}. Zaposlen je ${yearWhenEmployed} godine
//     i dobio je poslednju platu ${lastYearOfSalary} godine,
//     iz ${country} je, ${street}, kontrakt: ${phone}`;
// };
// console.log(getinfo());

// const calculateWorkYears = function (firstYear, secondYear) {
//   return `${firstName} je bio zaposlen ${firstYear - secondYear} godina`;
// };
// console.log(calculateWorkYears(yearWhenEmployed, lastYearOfSalary));

// const calculateYearsUntilRetreat = function (num) {
//   return `ostalo mu je do penzije jos ${65 - num} godina.`;
// };
// console.log(calculateYearsUntilRetreat(age));

// const getSalary = function () {
//   return salary;
// };
// const setSalary = function (newSalary) {
//   return (salary = newSalary);
// };
// console.log(getSalary());
// console.log(setSalary(4500));
// console.log(getSalary());

// const CalculateRaise = function () {
//   return salary * 0.15;
// };
// console.log(CalculateRaise());

// const employee = {
//   firstName: 'marko',
//   lastName: 'markovic',
//   age: 32,
//   salary: 3000,
//   yearWhenEmployed: 2024,
//   lastYearOfSalary: 2020,
//   country: 'Srbija',
//   street: 'Petra petrovica 25',
//   phone: '069123456',
// };

// console.log(`${employee.age} uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu`);

// const employeegetinfo = function () {
//   return `${employee.firstName} ${employee.lastName} ima ${employee.age} godina
//     i ima platu $${employee.salary}. Zaposlen je ${employee.yearWhenEmployed} godine
//     i dobio je poslednju platu ${employee.lastYearOfSalary} godine,
//     iz ${employee.country} je, ${employee.street}, kontrakt: ${employee.phone}`;
// };
// console.log(employeegetinfo());

// const employeecalculateWorkYears = function (firstYear, secondYear) {
//   return `${employee.firstName} je bio zaposlen ${
//     firstYear - secondYear
//   } godina`;
// };
// console.log(
//   employeecalculateWorkYears(
//     employee.yearWhenEmployed,
//     employee.lastYearOfSalary
//   )
// );

// const employeecalculateYearsUntilRetreat = function (num) {
//   return `ostalo mu je do penzije jos ${65 - num} godina.`;
// };
// console.log(employeecalculateYearsUntilRetreat(age));

// const employeegetSalary = function () {
//   return employee.salary;
// };
// const employeesetSalary = function (newSalary) {
//   return (employee.salary = newSalary);
// };
// console.log(employeegetSalary());
// console.log(employeesetSalary(4500));
// console.log(employeegetSalary());

// const employeeCalculateRaise = function () {
//   return employee.salary * 0.15;
// };
// console.log(employeeCalculateRaise());

// const monster = {
//   name: 'dragon',
//   health: 100,
//   energy: 99,
//   level: 12,
//   experience: 30,
//   speed: 250,
//   attack: 54,
//   movement: 'walking',
//   fly: function () {
//     if (this.movement === 'walking') {
//       this.movement = 'flying';
//       this.speed += 50;
//       console.log(`${this.name} is now flying current speed is ${this.speed}`);
//     } else if (this.movement === 'flying') {
//       console.log('monster is already flying');
//     }
//   },
//   walk: function () {
//     if (this.movement !== 'walking') {
//       this.movement = 'walking';
//       this.speed -= 50;
//       console.log(`${this.name} is now walking speed is ${this.speed}`);
//     } else if (this.movement === 'walking') {
//       console.log('monster is already walking');
//     }
//   },
//   attack: function (n) {
//     if (this.energy < 0) {
//       console.log('dont have enough energy to attack!');
//       return;
//     } else if (this.energy > n) {
//       this.experience += 50;
//       console.log('monster attacked with success');
//     } else {
//       this.energy -= 70;
//       this.health -= 50;
//       console.log('monster failed to attack');
//     }
//     this.energy -= 30;
//   },
//   heal: function () {
//     this.energy += 100;
//     // this.health += 100;
//   },
//   checkStats: function () {
//     if (this.health <= 0) {
//       console.log('GAME OVER');
//       return;
//     }
//     if (this.experience >= 100) {
//       const extraExp = this.experience - 100;
//       this.level++;
//       this.experience = extraExp;
//     }
//   },
// };

// // console.log(`${monster.name} health: ${monster.health}
// //   energy: ${monster.energy} level: ${monster.level} experience: ${monster.experience}
// //    speed: ${monster.speed} attack: ${monster.attack} movement: ${monster.movement}
// //    `);
// console.log(JSON.stringify(monster, null, 2));
// monster.attack(7);
// monster.checkStats();
// monster.heal();
// console.log(JSON.stringify(monster, null, 2));
// monster.attack(8);
// monster.checkStats();

// console.log(JSON.stringify(monster, null, 2));
// monster.attack(5);
// monster.checkStats();

// console.log(JSON.stringify(monster, null, 2));
// monster.attack(4);
// monster.checkStats();

// console.log(JSON.stringify(monster, null, 2));

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const objectObject = [
//   {
//     id: 1,
//     name: 'Strahinja',
//   },
//   {
//     id: 2,
//     name: 'Milica',
//   },
//   {
//     id: 3,
//     name: 'Nemanja',
//   },
//   {
//     id: 4,
//     name: 'Nikola',
//   },
// ];

// for (let names of objectObject) {
//   console.log(`${names.name}`);
// }

// const unazad = function (str) {
//   let reverse = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// };
// console.log(unazad('marko'));

// const findBiggestNum = function (arr) {
//   let bigest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > bigest) {
//       bigest = arr[i];
//     }
//   }
//   return bigest;
// };
// const mali = [1, 3, 6, 8, 98, 23, 43];
// console.log(findBiggestNum(mali));

// const spajanje = function (arr) {
//   let prvi = arr.join(' ');
//   return prvi;
// };
// console.log(spajanje(['marko', 'nema', 'pojma', 'programiranje']));

// const findIndex = function (arr, num) {
//   return arr.indexOf(num);
// };

// const array22 = [20, 34, 56, 78, 90, 33, 455, 677];
// console.log(findIndex(array22, 90));

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 1990);
// const jack = new Person('Jack', 1999);
// console.log(matilda);
// console.log(jack);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// matilda.calcAge();

// const Car = function (speed, make) {
//   this.speed = speed;
//   this.make = make;
// };

// const car1 = new Car(120, 'BMW');
// const car2 = new Car(95, 'mercedes');
// console.log(car1, car2);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
// };

// car1.accelerate();
// car1.brake();
// car2.accelerate();
// car2.brake();
// console.log(car1.speed);
// console.log(car2.speed);

// const jessica = new PersonCL('Jessica Davis', 1996);
// console.log(jessica);

// PersonCL.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

// jessica.greet();
// console.log(jessica.age);

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();

// class CarCL {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }
//   brake() {
//     this.speed -= 5;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCL('ford', 120);

// console.log(ford);
// console.log(ford.speedUS);
// ford.accelerate();
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i am stdying ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'computer science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// const Ev = function (name, speed, charge) {
//   this.name = name;
//   this.speed = speed;
//   this.charge = charge;
// };

// Ev.prototype = Object.create(CarCL.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge --;
//   console.log(
//     `${this.name} going at ${this.speed}, with a charge of ${this.charge} %`
//   );
// };

// const tesla = new Ev('tesla', 120, 23);

// console.log(tesla.chargeBattery(90));
// console.log(tesla.accelerate());
// tesla.brake();
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this.fullName;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this._fullName} and i am stdying ${this.course}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'computer science');
// martha.introduce();
// martha.calcAge();

// function changeElement(arr, index, newElement) {
//   arr[index] = newElement;
//   return arr;
// }
// console.log(changeElement([1, 2, 3], 0, 9));

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > 5) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// let arr = inp.split(', ').map(Number); // Don't change this line

// let newArr = [];
// arr.forEach((num, index) => {
//   if (num < 50 || num % 5 === 0) {
//     newArr.push(num);
//   }
// });
// console.log(newArr);

// function countVowels(str) {
//   let count = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// let arr = inp.split(', ').map(Number);
// if (arr.length % 2 === 0) {
//   let arrMid = arr.slice(
//     Math.floor(arr.length / 2 - 1),
//     Math.floor(arr.length / 2 + 1)
//   );
//   console.log(arrMid);
// } else {
//   let arrMid = arr.slice(
//     Math.floor(arr.length / 2 - 1),
//     Math.floor(arr.length / 2 + 2)
//   );
//   console.log(arrMid);
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.concat([6, 7, 8]));

// console.log(numbers.concat([6, 7, 8]).join(','));

// console.log(numbers.slice(0, 3));

// numbers.splice(1, 1, 99);
// console.log(numbers);
// class Observer {
//   ...
// }

// const observer = new Observer();

// const firstFunction = () => console.log('First Function!');
// const secondFunction = () => console.log('Second Function!');
// const thirdFunction = () => console.log('Third Function!');

// const firstFuncToken = observer.subscribe(firstFunction, 'firstTwoFuncs');
// const seconfFuncToken = observer.subscribe(secondFunction, 'firstTwoFuncs');

// observer.subscribe(thirdFunction, 'thirdFunc');

// observer.execute('firstTwoFuncs');
// // First Function! Second Function!
// observer.execute('thirdFunc');
// // Third Function!

// observer.unsubscribe('firstTwoFuncs', firstFuncToken);
// observer.execute('firstTwoFuncs');
// // Second Function!

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const mare = new Person('Marko', 'Markovic', 25);
// const dzoni = new Person('Nikola', 'Nikolic', 45);

// console.log(mare.getFullName());
// console.log(dzoni.getFullName());

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   constructor(breed) {
//     super(name, sound);
//     this.breed = breed;
//   }
// }

// class BankAccount {
//   #balance;

//   constructor() {
//     this.#balance = 0;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
//     } else {
//       console.log('Deposit amount must be positive.');
//     }
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log('Insufficient funds.');
//     } else if (amount > 0) {
//       this.#balance -= amount;
//       console.log(`Withdrew: $${amount}. New Balance: $${this.#balance}`);
//     } else {
//       console.log('Withdrawal amount must be positive.');
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// class BankAccount {
//   constructor() {
//     let balance = 0;

//     this.deposit = amount => {
//       if (amount > 0) {
//         balance += amount;
//         console.log(`Deposited: $${amount}. New Balance: $${balance}`);
//       } else {
//         console.log('Deposit amount must be positive.');
//       }
//     };

//     this.withdraw = amount => {
//       if (amount > balance) {
//         console.log('Insufficient funds.');
//       } else if (amount > 0) {
//         balance -= amount;
//         console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
//       } else {
//         console.log('Withdrawal amount must be positive.');
//       }
//     };

//     this.getBalance = () => balance;
//   }
// }

// const account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);
// console.log(`Balance: $${account.getBalance()}`);
// account.withdraw(60);
// console.log(account.balance);

// function findOasis(locations, target) {
//   // Write code here
//   for (let i = 0; i < locations.length; i++) {
//     if (locations[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// function countRecurringPatterns(patterns) {
//   const patternCounts = {};
//   let recurringCount = 0;

//   for (const pattern of patterns) {
//     if (patternCounts[pattern]) {
//       patternCounts[pattern]++;
//     } else {
//       patternCounts[pattern] = 1;
//     }
//   }

//   for (const count of Object.values(patternCounts)) {
//     if (count > 1) {
//       recurringCount++;
//     }
//   }
// }

// function alternateCase(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }
//   return result;
// }
// function stringWeaver(str1, str2) {
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let cleanStr1 = '';
//   let cleanStr2 = '';

//   for (let i = 0; i < str1.length; i++) {
//     if (!numbers.includes(str1[i])) {
//       cleanStr1 += str1[i];
//     }
//   }

//   for (let i = 0; i < str2.length; i++) {
//     if (!numbers.includes(str2[i])) {
//       cleanStr2 += str2[i];
//     }
//   }

//   let result = '';
//   let i = 0;

//   while (i < cleanStr1.length && i < cleanStr2.length) {
//     let char1 = cleanStr1[i];
//     if (vowels.includes(char1)) {
//       char1 = char1.toUpperCase();
//     }
//     result += char1;

//     if (vowels.includes(char2)) {
//       char2 = char2.toUpperCase();
//     }
//     result += char2;

//     i++;
//   }

//   let remaining =
//     cleanStr1.length > cleanStr2.length
//       ? cleanStr1.slice(i)
//       : cleanStr2.slice(i);
//   for (let j = 0; j < remaining.length; j++) {
//     let char = remaining[j];
//     if (vowels.includes(char)) {
//       char = char.toUpperCase();
//     }
//     result += char;
//   }

//   return result;
// }
// function combineMatrices(matrixA, matrixB, op) {
//   const rows = matrixA.length;
//   const cols = matrixA[0].length;
//   const result = [];

//   for (let r = 0; r < rows; r++) {
//     const rowArr = [];
//     for (let c = 0; c < cols; c++) {
//       if (op === '+') {
//         rowArr.push(matrixA[r][c] + matrixB[r][c]);
//       } else {
//         rowArr.push(matrixA[r][c] - matrixB[r][c]);
//       }
//     }
//     result.push(rowArr);
//   }

//   return result;
// }
function printPatterns(matrix) {
  const n = matrix.length;

  // Main Diagonal
  let mainDiagonal = [];
  for (let i = 0; i < n; i++) {
    mainDiagonal.push(matrix[i][i]);
  }
  console.log('Main Diagonal:', mainDiagonal.join(' '));

  // Anti-Diagonal
  let antiDiagonal = [];
  for (let i = 0; i < n; i++) {
    antiDiagonal.push(matrix[i][n - 1 - i]);
  }
  console.log('Anti-Diagonal:', antiDiagonal.join(' '));

  // Top Border
  let topBorder = matrix[0];
  console.log('Top Border:', topBorder.join(' '));

  // Bottom Border
  let bottomBorder = matrix[n - 1];
  console.log('Bottom Border:', bottomBorder.join(' '));

  // Left Border
  let leftBorder = [];
  for (let i = 0; i < n; i++) {
    leftBorder.push(matrix[i][0]);
  }
  console.log('Left Border:', leftBorder.join(' '));

  // Right Border
  let rightBorder = [];
  for (let i = 0; i < n; i++) {
    rightBorder.push(matrix[i][n - 1]);
  }
  console.log('Right Border:', rightBorder.join(' '));
}
