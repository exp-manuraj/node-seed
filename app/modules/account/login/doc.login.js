/**
   * @api {post} /login User Login
   * @apiName UserLogin
   * @apiGroup User
   *
   * @apiParamExample {json} Request-Format:
   *     {
   *       "email": "user@email.com",
   *       "password": "123456"
   *     }
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        "status": 1,
   *        "message": "Logged in successfully!",
   *        "code": 200,
   *        "data": {
   *          "_id": "58563bd869af5c6846c6b6b0",
   *          "fname": "User",
   *          "lname": "G",
   *          "email": "user@email.com",
   *        }
   *      }
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 403 Forbidden
   *     {
   *       "status": 0,
   *       "message": "Access is denied due to invalid credentials!",
   *       "code": 403,
   *       "data": null
   *     }
   */
