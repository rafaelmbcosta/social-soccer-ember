import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:3000/reports',
	buildURL: function(record, suffix) {
        var s = this._super(record, suffix);
        return s + ".json";
    },
    pathForType: function(type) {
		return Ember.String.underscore(type);
	}
});