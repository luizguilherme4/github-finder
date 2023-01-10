import { UserProps } from "../types/user"

import { MdLocationPin } from "react-icons/md"

import classes from "./User.module.css";

const User = ({
    avatar_url,
    login,
    location,
    followers,
    following
}: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div className={classes.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.numbers}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={classes.numbers}>{following}</p>
                </div>
            </div>
            <a href={`https://github.com/${login}`} target="_blank">Ir para o GitHub</a>
        </div>
    )
}

export default User;