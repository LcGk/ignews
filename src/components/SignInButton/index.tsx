import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

    function toggleLoggedIn() {
        setIsUserLoggedIn(!isUserLoggedIn);
    }

    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={toggleLoggedIn}
        >
            <FaGithub color="#04d361"/>
            Luca Gulak
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={toggleLoggedIn}
        >
            <FaGithub color="#eba417"/>
            Sign In with Github
        </button>
    )
}