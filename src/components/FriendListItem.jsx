import PropTypes from 'prop-types'
import css from './FriendListItem.module.css'


export default function FriendListItem({
    avatar,
    name,
    isOnline
}) {
    return (
        <li className={css.item}>
            {isOnline ? (
                <span
                    className={css.status}
                    style={{
                        display: "block",
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: "green"
                    }}>
                </span>
            ) : (
                <span
                    className={css.status}
                    style={{
                        display: "block",
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: "red"
                    }}>
                </span>  
            )}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}