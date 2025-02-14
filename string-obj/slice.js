const address = 'Jalalpur';
const part = address.slice(2,5);
// console.log(part);

const sentence = 'I am a good and hardworking person';
// console.log(sentence.split(''));
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendStr = 'Rahim, kahim, jahin, mahin, iftin';
const friends = friendStr.split(',');
// console.log(friends);

const realFriend = [ 'Rahim', ' kahim', ' jahin', ' mahin', ' iftin' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
