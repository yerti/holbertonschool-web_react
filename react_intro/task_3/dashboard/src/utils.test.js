import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// test getFullYear
test('getFullYear return the correct year', () => {
    const correctYear = new Date().getFullYear();
    expect(getFullYear()).toBe(correctYear);
});

// test getFooterCopy with argument true
test('getFooterCopy returns the correct string when argument is true', () => {
    const result = getFooterCopy(true);
    expect(result).toBe('Holberton School');
});

// test getFooterCopy whit argument false
test('getFooterCopy returns the correct string when argument is false', () => {
    const result = getFooterCopy(false);
    expect(result).toBe('Holberton School main dashboard');
});

// test getLatestNotification
test('getLatestNotification returns a non-empty string', () => {
    const result = getLatestNotification();
    expect(result).toMatch(/<strong>Urgent requirement<\/strong> - complete by EOD/); 
});
