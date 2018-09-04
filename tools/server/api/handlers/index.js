'use strict'

const DbQuery = require('../dbs/queries'),
  Bounce = require('bounce'),
  Security = require('../../security'),
  Email = require('../../email')

module.exports = {
  Account: {
    Login: async (request, h) => {

      try {

        const ip = request.info.remoteAddress,
          payload = JSON.parse(request.payload),
          encoded = await Security.Token.Encode(payload.email, ip),
          decoded = await Security.Token.Decode(encoded),
          email = await Email.EmailProcessor(payload.email, encoded)

        await DbQuery.Mysql(
          '../api/sql/insert_login.sql',
          { ...payload, ...encoded })

        return h.response({ status: 200 })

      } catch(err) {

        Bounce.rethrow(err, 'system')
       }
    }
  },
  Contact: {
    Insert: async (request, h) => {

      try {
        await DbQuery.Mysql(
          '../api/sql/insert_contact_message.sql',
          JSON.parse(request.payload))

        return h.response({ status: 200 })

      } catch(err) {

        Bounce.rethrow(err, 'system')
      }
    }
  },
  Hello: async (request, h) => {

    let data = null

    try {

      data = await DbQuery.Mysql(
        '../api/sql/select_login.sql',
        11)

      return h.response({data: data})

    } catch(err) {

      Bounce.rethrow(err, 'system')
    }

    return data
  }
}
