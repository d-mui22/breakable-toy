# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_01_182011) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "golf_courses", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "holes", force: :cascade do |t|
    t.string "yards", null: false
    t.string "par", null: false
    t.string "hole", null: false
    t.bigint "golf_course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["golf_course_id"], name: "index_holes_on_golf_course_id"
  end

  create_table "scorecards", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "golf_course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["golf_course_id"], name: "index_scorecards_on_golf_course_id"
    t.index ["user_id"], name: "index_scorecards_on_user_id"
  end

  create_table "strokes", force: :cascade do |t|
    t.bigint "scorecard_id", null: false
    t.bigint "hole_id", null: false
    t.string "strokes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hole_id"], name: "index_strokes_on_hole_id"
    t.index ["scorecard_id"], name: "index_strokes_on_scorecard_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role", default: "member", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "handicap"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
