import formatDateTime from "../formatDateTime";

describe('The format date time function', () => {
    it('should return the formatted date and time when a timestamp is passed in', () => {
        const unformattedTime = '2021-04-28T10:30:00Z';
        const formattedTime = formatDateTime(unformattedTime);
        expect(formattedTime).toEqual('28/4/2021 10:30');
    })
})