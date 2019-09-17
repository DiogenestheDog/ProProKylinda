# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'open-uri'
#ancients = [Faker::Ancient.unique.god ,Faker::Ancient.unique.primordial ,Faker::Ancient.unique.titan ,Faker::Ancient.unique.hero ]
ActiveRecord::Base.transaction do 
    (0...20).each do |i|

        User.create( {
            :username => Faker::Ancient.unique.hero,
            :password => Faker::Alphanumeric.unique.alphanumeric(number: 10),
            :email => Faker::Alphanumeric.unique.alphanumeric(number: 10)
        } )

        Post.create( {
            :user_id => i,
            :post_type => "text",
            :header => Faker::Books::Lovecraft.unique.sentence,
            :body => Faker::Books::Lovecraft.unique.paragraph
        } )
    end
    ryan = User.create({:username => "ryan", :password => "password", :email => "ryan"})
end