import { getRandomPositiveInteger } from './util.js';
const NAMES = ['Артём', 'Светлана', 'Алёна', 'Семён', 'Александр', 'Иван', 'Кристина', 'Елена', 'Владислав'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'];
const DESCRIPTIONS = ['Ещё один день. Ещё одно фото.', 'В Питере пить.', '-А завтра что? — А завтра лето!'];

const MAX_COUNT_PHOTO = 25;
const COUNT_COMMENT = 8;

const CountLike = {
	MIN: 15,
	MAX: 200
};
const AvatarNumber = {
    MIN:1,
    MAX:6
};
const createComment = (id) => ({
id,
avatar: `img/avatar-${getRandomPositiveIntege(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
message: MASSAGES[getRandomPositiveIntege(0, MESSAGES.length - 1)],
name: NAMES[getRandomPositiveIntege(0, NAMES.length - 1)],
});
const createCommentsData = () => {
    const comments = Array.from({
        length: 3
    });
    return comments.map((element, index) => createComments(index + 1));
};
const createPhotoData = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
    comments: CreateCommentsData(),
});
const createPhotoArray = () => {
const photos = Array.from({length: MAX_COUNT_PHOTOS}).map((element, index) => createPhotoData(index + 1));
};
createPhotoArray(); 
export {photos};
