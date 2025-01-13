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

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this.fullName;
  }
}

const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);

PersonCL.prototype.greet = function () {
  console.log(`hey ${this.firstName}`);
};

jessica.greet();
console.log(jessica.age);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();

class CarCL {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }
  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCL('ford', 120);

console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
console.log(ford);
