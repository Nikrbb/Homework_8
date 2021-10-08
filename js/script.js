const userBirthYear = prompt(`Введите год рождения`);
const userAddress = prompt(`В каком городе вы живете?`);
const userSports = prompt(`Ваш любимый вид спорта?`);
const currentYear = new Date();
const userAge = currentYear.getFullYear() - +userBirthYear;

let year;
if ( (userBirthYear === null) || (userBirthYear === ``) ) {
    year = `Жаль, что ты не захотел ввести свой возраст.`
} else if ( +userBirthYear < 1940 ) {
    year = `На кладбище провели Wi-Fi?`
} else if ( +userBirthYear >= currentYear.getFullYear() ) {
    year = `Ты пришел из будущего?`
} else if ( (userAge < 5) && (userAge > 0) ) {
    year = `Ты слишком маловат, что бы это читать.`
} else {
    year = `Твой возраст ${userAge}.`
}
console.log(year)

let town;
switch ( userAddress ) {
    case `Киев` :
    case `Москва` :
    case `Минск` :
        town = `Ты живешь в столице ${userAddress}.`;
        break;
    case null :
    case `` :
        town = `Жаль, что ты не захотел ввести город проживания.`;
        break;
    default:
        town = `Ты живешь в городе ${userAddress}.`;
};
console.log(town)

let champ;
switch ( userSports ) {
    case `Автоспорт`:
        champ = `Круто! Хочешь стать как Льюис Хэмилтон?`;
    break;
    case `Киберспорт`:
        champ = `Круто! Хочешь стать как S1mple?`;
        break;
    case `Баскетбол`:
        champ = `Круто! Хочешь стать как Алекс Карузо?`;
        break;
    case null :
    case `` :
        champ = `Жаль, что ты не захотел ввести свой любимый вид спорта`;
        break;
    default:
        champ = `Интересный вид спорта ты предпочитаешь.`;
};
console.log(champ);

alert(`${year} ${town} ${champ}`);
