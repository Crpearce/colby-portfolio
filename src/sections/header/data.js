import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {MdComputer} from 'react-icons/md';
import hawaii from '../../assets/hawaii.jpg';
import fam from '../../assets/fam.jpg';
import crater from '../../assets/crater.jpg';
import header from '../../assets/header.jpg';

export const socials = [
    {id: 1, link: 'https://www.linkedin.com/in/colby-pearce1/', icon: <AiOutlineLinkedin/>},
    {id: 2, link: 'https://github.com/Crpearce', icon: <AiFillGithub/>},
    {id: 3, link: 'https://terminal.turing.edu/profiles/1596', icon: <MdComputer/>}
]


export const photos = [
        {
        id: 1,
        photo: header
        },
        {
        id: 2,
        photo: hawaii
        },
        {
        id: 3,
        photo: fam
        },
        {
        id: 4,
        photo: crater
        }
    ]



    export default photos;