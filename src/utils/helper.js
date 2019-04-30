import * as moment from 'moment';

export const mapToFilters = (data) => {
    let filtered = [];
    data.forEach(result => {
        let futureDates = result.dates.filter(date => moment() < moment(date.start));
        futureDates.forEach(date => {
            let monthItem = moment(date.start).format('MMM YYYY');
            let target = filtered.findIndex(item => item.filter === monthItem);

            if (target !== -1) {
                filtered[target].count += 1;
            } else {
                filtered.push({ filter: monthItem, count: 1 });
            }
        });
    });
    return filtered.filter((item, index) => !(index > 5));
};