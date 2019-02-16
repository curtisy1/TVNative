import { Aspects } from './models/Aspects';
import { Casts } from './models/Casts';
import { Categories } from './models/Categories';
import { Channels } from './models/Channels';
import { Countries } from './models/Countries';
import { Credits } from './models/Credits';
import { Languages } from './models/Languages';
import { Roles } from './models/Roles';
import { Settings } from './models/Settings';
import { Shows } from './models/Shows';
import { SubTitles } from './models/SubTitles';
import { Titles } from './models/Titles';
import { Videos } from './models/Videos';
import Vasern from 'vasern';

const TvDB = new Vasern({
    schemas: [
        Aspects,
        Casts,
        Categories,
        Channels,
        Countries,
        Credits,
        Languages,
        Roles,
        Settings,
        Shows,
        SubTitles,
        Titles,
        Videos
    ],
    version: 1
});

export default TvDB;