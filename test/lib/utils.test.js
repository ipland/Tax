import { roundUp, toFixed, sum } from '../../src/lib/utils'

describe('lib::utils', function() {
  describe('#roundUp()', function() {
    describe('The roundUp of 1.499', function() {
      it('should return 1.50', function() {
        const res = roundUp(1.499)

        expect(res).to.deep.equal(1.50)
      })
    })

    describe('The roundUp of 4.1985', function() {
      it('should return 4.20', function() {
        const res = roundUp(4.1985)

        expect(res).to.deep.equal(4.20)
      })
    })

    describe('The roundUp of 1.899', function() {
      it('should return 1.90', function() {
        const res = roundUp(1.899)

        expect(res).to.deep.equal(1.90)
      })
    })

    describe('The roundUp of 0.5652', function() {
      it('should return 0.60', function() {
        const res = roundUp(0.5652)

        expect(res).to.deep.equal(0.60)
      })
    })
  })

  describe('#toFixed()', function() {
    describe('Slice from 0 to the number of digits to appear after the decimal point, 10.5652', function() {
      it('should return `10.56`', function() {
        const res = toFixed(10.5652, 2)

        expect(res).to.deep.equal('10.56')
      })
    })

    describe('Slice from 0 to the number of digits to appear after the decimal point, 10.5', function() {
      it('should return `10.50`', function() {
        const res = toFixed(10.5, 2)

        expect(res).to.deep.equal('10.50')
      })
    })

    describe('Slice from 0 to the number of digits to appear after the decimal point, 10.0', function() {
      it('should return `10.00`', function() {
        const res = toFixed(10.0, 2)

        expect(res).to.deep.equal('10.00')
      })
    })

    describe('Slice from 0 to the number of digits to appear after the decimal point, 10', function() {
      it('should return `10.00`', function() {
        const res = toFixed(10, 2)

        expect(res).to.deep.equal('10.00')
      })
    })
  })

  describe('#sum()', function() {
    describe('The sum of 0.1 + 0.2', function() {
      it('should return 0.3', function() {
        const res = sum(0.1, 0.2, 2)

        expect(res).to.deep.equal(0.3)
      })
    })

    describe('The sum of 0.1 + 2', function() {
      it('should return 2.1', function() {
        const res = sum(0.1, 2, 2)

        expect(res).to.deep.equal(2.1)
      })
    })

    describe('The sum of 1 + 2', function() {
      it('should return 3', function() {
        const res = sum(1, 2, 2)

        expect(res).to.deep.equal(3)
      })
    })
  })
})