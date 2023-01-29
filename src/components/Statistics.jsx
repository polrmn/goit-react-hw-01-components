import PropTypes from 'prop-types';
import Statistic from './Statistic';
import css from './Statistics.module.css'

export default function Statistics({
    title,
    stats
}) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            <ul className={css.stat_list}>
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

