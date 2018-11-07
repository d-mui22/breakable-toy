# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "david", last_name: "mui", email: "typehydro@gmail.com", password: "123456", role: "admin", handicap: "17")
User.create(first_name: "tom", last_name: "brady", email: "something@gmail.com", password: "123456", role: "member", handicap: "10")

courses = [
  {name: "widows walk"},
  {name: "granite links"},
  {name: "blackrock cc"}
]
courses.each do |course|
  GolfCourse.create(course)
end

holes = [
  {yards: "150", par: "3", hole: "1", golf_course_id: 1, yard_location: "yards-1", par_location: "par-1", stroke_location: "stroke-1"},
  {yards: "350", par: "4", hole: "2", golf_course_id: 2, yard_location: "yards-1", par_location: "par-1", stroke_location: "stroke-1"},
  {yards: "350", par: "4", hole: "3", golf_course_id: 1, yard_location: "yards-2", par_location: "par-2", stroke_location: "stroke-2"},
  {yards: "250", par: "3", hole: "2", golf_course_id: 3, yard_location: "yards-1", par_location: "par-1", stroke_location: "stroke-1"},
  {yards: "550", par: "5", hole: "5", golf_course_id: 2, yard_location: "yards-2", par_location: "par-2", stroke_location: "stroke-2"},
  {yards: "250", par: "3", hole: "4", golf_course_id: 3, yard_location: "yards-2", par_location: "par-2", stroke_location: "stroke-2"}
]
holes.each do |hole|
  Hole.create(hole)
end

scorecards = [
  {golf_course_id: 1, user_id: 1},
  {golf_course_id: 2, user_id: 2},
  {golf_course_id: 2, user_id: 2},
  {golf_course_id: 3, user_id: 1},
  {golf_course_id: 2, user_id: 2}
]
scorecards.each do |scorecard|
  Scorecard.create(scorecard)
end

strokes = [
  {scorecard_id: 1, hole_id: 1, strokes: "3"},
  {scorecard_id: 1, hole_id: 3, strokes: "4"},
  {scorecard_id: 2, hole_id: 4, strokes: "8"}
]
strokes.each do |stroke|
  Stroke.create(stroke)
end
