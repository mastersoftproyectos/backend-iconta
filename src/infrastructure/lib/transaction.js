'use strict';

module.exports = function setupTransaction (sequelize) {
  function create () {
    return new Promise((resolve, reject) => {
      return sequelize.transaction()
        .then(t => (resolve(t)));
    });
  }

  function commit (t) {
    if (t && t.finished !== 'commit' && t.finished !== 'rollback') {
      t.commit();
    }
  }

  function rollback (t) {
    console.log('==========_MENSAJE_A_MOSTRARSE_==========');
    console.log(t);
    console.log('==========_MENSAJE_A_MOSTRARSE_==========');
    if (t && t.finished !== 'commit' && t.finished !== 'rollback') {
      t.rollback();
    }
  }

  return {
    create,
    commit,
    rollback
  };
};
