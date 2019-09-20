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
    Post.destroy_all
    User.destroy_all

    image_urls = [
        "https://proprokylinda-dev.s3-us-west-1.amazonaws.com/1NkRg7CtvnjuCJ3UyfETS9aK",
        "https://proprokylinda-dev.s3-us-west-1.amazonaws.com/gentle_croak.jpeg",
        "https://proprokylinda-dev.s3-us-west-1.amazonaws.com/gentle_croak.jpeg",
        "https://proprokylinda-dev.s3-us-west-1.amazonaws.com/proud_something.jpeg",
        "https://proprokylinda-dev.s3-us-west-1.amazonaws.com/vegan_taco.jpeg"
    ]
    seeding_loop = (1..20).to_a
    seeding_loop.map! do |i|

        User.create!( {
            :username => Faker::Ancient.unique.hero,
            :password => Faker::Alphanumeric.unique.alphanumeric(number: 10),
            :email => Faker::Alphanumeric.unique.alphanumeric(number: 10)
        } )
    end

    seeding_loop.each_with_index do |user, i|
        the_post = Post.create!( {
            :user_id => user.id,
            :post_type => "text",
            :header => Faker::Books::Lovecraft.unique.sentence,
            :body => Faker::Books::Lovecraft.unique.paragraph
        } )
        if i < image_urls.length
            file = open(image_urls[i])
            the_post.image.attach(io: file, filename: "file_#{i}")
        end
    end
    ryan = User.create({:username => "ryan", :password => "password", :email => "ryan"})
    file = open('https://proprokylinda-dev.s3-us-west-1.amazonaws.com/phantasia_cover.jpeg')
    ryan.avatar.attach(io: file, filename: 'ryan_avatar.jpeg')
end