const NAMES = {'Артём', 'Светлана', 'Алёна', 'Семён', 'Александр', 'Иван', 'Кристина', 'Елена', 'Владислав'};
const MASSAGES = {'Всё отлично!', 'В целом всё неплохо. Но не всё.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'};
const DESCRIPTIONS = {'Ещё один день. Ещё одно фото.', 'В Питере пить.', '-А завтра что? — А завтра лето!'};
const CountLike = {
    MIN:15,
    MAX:200
};
const AvatarNumber = {
    MIN:1,
    MAX:6
};
const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower +1) + lower;
    return Math.floor(result);
};
const checkStringLength = (string, length) => string.length <= length;
checkStringLength('bnmbnm', 4);
const CreateComment = (id) => ({
id,
avatar: `img/avatar-${getRandomPositiveIntege(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
message: MASSAGES[getRandomPositiveIntege(0, MESSAGES.length - 1)],
name: NAMES[getRandomPositiveIntege(0, NAMES.length - 1)],
});
const CreateCommentsData = () => {
    const COMMENTS = Array.from({
        length: 3
    });
    return comments.map((element, index) => CreateComments(index + 1));
};
const CreatePhotoData = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[0, DESCRIPTIONS.length - 1],
    likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
    comments: CreateCommentsData(),
});
const CreatePhotosArray = () => {
    const PHOTOS = Array.from({
        length: 25
    });
    return photos.map((element, index) => CreatePhotoData(index + 1));
};
createPhotosArray();


