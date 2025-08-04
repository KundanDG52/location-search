# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

TypeScript Practice:

<!--
// const color: string = 'red';
// const isRed: boolean = color === 'red';
// const age: number = 25;

// const colors: string[] = [
//     'red','green','blue'
// ];
// const areColorsRed: boolean[] = [
//     true, false, false
// ];
// const ages: number[] = [
//     20,30,40
// ];

// function add(a:number, b: number): number{
//     return a + b;
// }

// function printColors(colors:string[]){
//     console.log(colors)
// }
// printColors(colors)

// function printAge(age: number){
//     console.log(age);
// }
// printAge(26);
// interface Car {
//     year: number;
//     make: string;
//     model: string;
// }

// function formatCar(car: Car){
//     return `Year ${car.year}, model: ${car.model}, make: ${car.make}`;
// }

// formatCar({
//     year: 2015,
//     make: 'Ford',
//     model: 'Mustang'
// })

// import React from 'react';

// interface TaskShowProps{
//     title: string;
//     completed: boolean
// }

// function TaskShow({title, completed}:TaskShowProps){
//     return <div>
//     {title} - {completed ? 'Done' : 'Need to complete'}
//     </div>
// }

// <TaskShow title='Write an interface' completed={true}/>

// interface Car {
//     year: number;
//     model: string;
// }

// function printCar(car: Car){
//     console.log(car);
// }

// const mustang: Car = {
//     model: 'Mustang',
//     year: 2015
// }
// const caroma: Car= {
//     model: 'Caroma',
//     year: 2010
// }

// printCar(mustang);
// printCar(caroma);

// interface Car {
//     year: number;
//     model: string;
//     setYear: (year:number)=>void,
//     setModel: (model:string)=>void,
//     getDescription: ()=>string
// }

// const mustang: Car = {
//     model: 'Mustang',
//     year: 2015,
//     setYear(nextYear: number){
//         this.year = nextYear;
//     },
//     setModel(nextModel: string){
//         this.model = nextModel;
//     },
//     getDescription(){
//         return `Year: ${this.year}, Model: ${this.model}`
//     }
// }

// import React from 'react';

// interface ColorPickerProps{
//     colors: string[],
//     handleColorSelect: (colors: string)=> void;
// }

// function ColorPicker({colors, handleColorSelect}: ColorPickerProps){
//     const renderedColors = colors.map(color=>{
//         return <button key={color} onClick={()=>handleColorSelect(color)}>
//         {color}
//         </button>
//     });
//     return <div>{renderedColors}</div>
// }

// <ColorPicker
//     colors={['red','green','blue']}
//     handleColorSelect={(color)=> console.log(color)}
// />

// import React from 'react';

// interface ButtonProps{
//     label: string;
//     onClick: ()=> void;
// }
// function Button({label, onClick}: ButtonProps){
//     return <button onClick={()=>onClick()}>
//     </button>
// }

// interface IconButtonProps extends ButtonProps{
//     icon: string
// }
// function IconButton({label, onClick, icon}: IconButtonProps){
//     return <button onClick={()=> onClick()}>
//         {icon}
//         {label}
//     </button>
// }

// function logOutput(value: string | number | string[] | Image){
//     if(typeof value === 'string'){
//         console.log(value.toUpperCase());
//     }
//     if(typeof value === 'number'){
//         Math.round(value);
//     }
//     if(Array.isArray(value)){
//         value.join('')
//     }
//     if(typeof value === 'object' && !Array.isArray(value)){
//         value.src;
//     }
// }

// interface Image{
//     src: string;
// }

// interface User{
//     username: string;
// }

// // Type Predicate
// function isUser(value: Image | User): value is User{
//     return 'username' in value;
// }


// function logOutput(value: Image | User){
//     if(isUser(value)){
//         console.log(value.username);
//     }else{
//         console.log(value.src);
//     }

// }


// logOutput({src: 'img.jpg'});
// logOutput({ username: 'kundan'});

// interface UserProfile{
//     likes: string[];
// }

// interface User{
//     id: string;
//     username: string;
//     profile ?: UserProfile
// }

// const user: User={
//     id:'abc',
//     username: 'me',
//     profile:{
//         likes: ['cats']
//     }
// }
// if(user.profile){
//     user.profile.likes
// }
// user.profile?.likes

// function logValue(value: string, message ?: string){
//     if(message){
//         console.log(message, value);
//     }else{
//         console.log(value);
//     }
// }

// logValue('lakaslk');
// logValue('aeiouroreit', 'SOMETHING ELSE')

// interface Book{
//     title: string;
// }

// async function fetchBook():Promise<Book>{
//     const res = await fetch('/book');
//     const data: unknown = await res.json();

//     if(data && typeof data === 'object' && 'title' in data && typeof data.title === 'string'){
//         return data as Book;
//     }

//     throw new Error('Expected to get a book, but didnt');
// }

// async function run(){
//     const book = await fetchBook();
// }

// interface Image {
//     src: string;
// }
// type LoggableValue = string | number | string[] | Image;
// function logValue(value: LoggableValue){}


// GENERICS
// SAMPLE CODE
// function wrapInArray(value: string | number): (string | number)[] {
//     return [value];
// }
// const result1 = wrapInArray('assfsd');
// const result2 = wrapInArray(10);

// function wrapInArray<T>(value: T) : T[]{
//     return [value];
// }
// // function wrapNumberInArray(value: number): number[]{
// //     return [value];
// // }
// const result1 = wrapInArray<string>('assfsd');
// const result2 = wrapInArray<number>(10);

// function toRecord<T>(id: T, value: string){
//     return{
//         id,
//         value
//     };
// }

// const result = toRecord<number>(123, 'my@email.com')
// const result2 = toRecord<string>('ea01', 'my@email.com')

// function toRecord<T, U>(id: T, value: U){
//     return{
//         id,
//         value
//     };
// }
// const result = toRecord<number, string>(123, 'my@email.com')
// const result2 = toRecord<string,number[]>('ea01', [1,5,7])

// function randomElement<T>(arr: T[]){
//     const index = Math.floor(Math.random() * arr.length);
//     return arr[index];
// }
// const result = randomElement<number>([1,2,3]);
// const result2 =  randomElement<string>(['a','b','c']);

// interface User{
//     username: string;
// }
// interface Message{
//     content: string;
// }
// interface Image{
//     url: string;
// }

// async function fetchUser(){
//     const res = await fetch('/users');
//     const json = await res.json();

//     return json as User;
// }

// async function fetchData<T>(path:string):Promise<T>{
//     const res = await fetch(path);
//     const json = await res.json();

//     return json as T;
// }

// const run = async()=>{
//     const user = await fetchData<User>('/users');
//     const message = await fetchData<Message>('messages');
//     const image = await fetchData<Image>('images');
// }

// function wrapInArray<T>(value: T): T[]{
//     return [value];
// }
// const result1 = wrapInArray('assfsd');
// const result2 = wrapInArray(10);

// function callAndReturn<T>(fn:()=> T): T{
//     return fn();
// }

// const result = callAndReturn(()=> 5);

// import {useState} from 'react';

// function ColorPicker(){
//     const [colors, setColors] = useState<string[]>([]);
//     const handleClick = () =>{
//         setColors([...colors, 'red']);
//     }
//     return <button onClick={handleClick}>Click</button>
// }

// function merge<T extends object, U extends object>(objA: T, objB: U){
//     return {...objA, ...objB};
// }

// const result = merge(
//     {id: 'asdsd'},
//     {color: 'red'}
// )


// function collect<T extends keyof U, U extends object>(key: T, arr: U[]){
//     return arr.map(el=>el[key]);
// }

// const result = collect('count', [
//     {count: 1, name: 'one'},
//     {count: 20, name: 'two'}
// ])
-->
