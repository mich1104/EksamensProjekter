/**
 * Created by Michael on 27/04/15.
 */
describe("Testing the filter", function () {

    beforeEach(module('ReuseApp'));
    describe("filter: name", function () {
        it('should return "lastName, firstName", given an object with the properties lastName and firstName',
            inject(function(nameFilter){

                expect(nameFilter({
                    firstName: 'Mads',
                    lastName: 'Larsen'
                })).toBe('Larsen, Mads');
            }));
        it('should return the string "unknown format" if either of the attributes is not defined',
            inject(function(nameFilter){

                expect(nameFilter({})).toBe('unknown format');
            }));
    });
});