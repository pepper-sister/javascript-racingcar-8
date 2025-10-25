import { Console } from '@woowacourse/mission-utils';
import printWinners from './print/printWinners.js';

describe('우승자 구하기 테스트', () => {
    test('position 최대인 자동차 이름 배열', () => {
        const race = [
            { name: 'pobi', position: 5 },
            { name: 'woni', position: 4 },
            { name: 'jun', position: 5 },
        ];
        jest.spyOn(Console, 'print').mockImplementation(() => {});

        printWinners(race);
        expect(Console.print).toHaveBeenCalledWith('최종 우승자 : pobi, jun');
    });

    test('우승자 없는 에러', () => {
        const race = [
            { name: 'pobi', position: 0 },
            { name: 'woni', position: 0 },
            { name: 'jun', position: 0 },
        ];
        expect(() => printWinners(race)).toThrow('우승자가 없습니다.');
    });
});
