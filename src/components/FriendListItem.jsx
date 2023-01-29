import PropTypes from 'prop-types'


export default function FriendListItem({
    avatar,
    name,
    isOnline
}) {
    return (
        <li className="item">
            {isOnline ? (
                <span
                    className="status"
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
                    className="status"
                    style={{
                        display: "block",
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: "red"
                    }}>
                </span>  
            )}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}