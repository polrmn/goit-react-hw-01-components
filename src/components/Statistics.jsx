import PropTypes from 'prop-types';
import Statistic from './Statistic';

export default function Statistics({
    title,
    stats
}) {
    return (
        <section className="statistics">
            {title && <h2 className="title">Upload stats</h2>}
            <ul className="stat-list">
                {stats.map(stat => (
                    <Statistic
                        key={stat.id}
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}

